import { Injectable, ElementRef } from '@angular/core';
import { drawDOM, pdf, Group } from '@progress/kendo-drawing';

@Injectable()
export class PdfExporterService {
  constructor() {
  }

  pdfExport(el: ElementRef, fileName, paperSize = 'auto') {
    drawDOM(el.nativeElement, {
      paperSize: paperSize,
      margin: { left: '1cm', top: '1cm', right: '1cm', bottom: '1cm' },
      avoidLinks: true,
      forcePageBreak: null,
      template: null,
      keepTogether: null,
      repeatHeaders: true,
      scale: 1
    })
      .then(function (group) {
        // Render the result as a PDF file
        pdf.saveAs(group, fileName);
      });
  }

  saveAsPdf(group: Group, fileName: string) {
    pdf.saveAs(group, fileName);
  }
}
