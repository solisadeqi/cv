import { Document, Packer, Paragraph } from 'docx';

export function convertHtmlToPdf(htmlContent, callback) {
  const options = { format: 'Letter' };
  htmlPdf.create(htmlContent, options).toBuffer((err, buffer) => {
    if (err) return callback(err);
    callback(null, buffer);
  });
}

export function convertHtmlToWord(htmlContent) {
  const doc = new Document({
    sections: [
      {
        children: [new Paragraph(htmlContent)],
      },
    ],
  });

  return Packer.toBlob(doc);
}
