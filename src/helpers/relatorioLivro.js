const Autor = require("../models/Autor");
const Assunto = require("../models/Assunto");
const Livro = require("../models/Livro");
const PDFPrinter = require("pdfmake");
const fs = require("fs");

exports.gerarRelatorio = async (req, res) => {

    const livros = await Livro.findAll({
        include: [
            {
                model: Assunto,
                attributes: ["id", "descricao"],
                through: {
                    attributes: []
                }
            },
            {
                model: Autor,
                attributes: ["id", "nome"],
                through: {
                    attributes: []
                }
            }
        ]
    });

    const fonts = {
        Helvetica: {
            normal: 'Helvetica',
            bold: 'Helvetica-Bold',
            italics: 'Helvetica-Oblique',
            bolditalics: 'Helvetica-BoldOblique'
        },
    };

    const printer = new PDFPrinter(fonts);

    const body = [];        
    let autores = [];
    let assuntos = [];

    for await (let livro of livros) {
        const rows = new Array();
        rows.push(livro.id);
        rows.push(livro.titulo);
        rows.push(livro.isbn);
        
        autores = livro.Autors.map(autor => {
            return autor.nome
        })        
        
        rows.push(autores.join(", "));

        assuntos = livro.Assuntos.map(assunto => {
            return assunto.descricao
        })

        rows.push(assuntos.join(", "));
        rows.push(livro.precoUnitario);
        body.push(rows);
    }

    let data = new Date();
    let dataHoraAtual = `${data.getDate().toString().padStart(2, "0")} / ${String(data.getMonth() + 1).toString().padStart(2, "0")} / ${data.getFullYear()} ${data.getHours().toString().padStart(2, "0")}:${data.getMinutes().toString().padStart(2, "0")}`;

    const docDefinitions = {        
        pageSize: "A4",
        pageOrientation: "landscape",
        footer: function(currentPage, pageCount) {
            return {
                table: {
                    widths: "*",
                    body: [
                        [
                            { text: `Página ${currentPage} de ${pageCount}`, alignment: "right", style: "footer" }
                        ]
                    ]
                }
            }
        },
        defaultStyle: { font: "Helvetica" },
        content: [
            {
                columns: [
                    {
                        text: "Livros", style: "header"
                    },
                    {
                        width: "auto",
                        text: dataHoraAtual, style: "data"
                    }
                ]
            },
            {
                layout: 'lightHorizontalLines',
                table: {
                    widths: ['auto', 'auto', 'auto', 'auto', 'auto', 'auto'],
                    body: [
                        [{ text: "Id", style: "columnsTitle" }, 
                         { text: "Título", style: "columnsTitle" }, 
                         { text: "ISBN", style: "columnsTitle" }, 
                         { text: "Autores", style: "columnsTitle" }, 
                         { text: "Assuntos", style: "columnsTitle" }, 
                         { text: "Preço", style: "columnsTitle" }],
                        ...body
                    ]
                },
                layout: {
                    fillColor: function (rowIndex, node, columnIndex) {
                        return (rowIndex % 2 === 0) ? '#CCCCCC' : null;
                    }
                }
            }
        ],
        styles: {
            header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
            },
            data: {
                fontSize: 10,
                bold: true
            },
            columnsTitle: {
                bold: true,
                alignment: 'left'
            },
            footer: {
                bold: true,
                fontSize: 10
            }
        }
    };

    const pdfDoc = printer.createPdfKitDocument(docDefinitions);

    const chunks = [];
    pdfDoc.on("data", (chunk) => {
        chunks.push(chunk);
    });

    pdfDoc.end();

    pdfDoc.on("end", () => {
        const result = Buffer.concat(chunks);
        res.end(result);
    });

}
