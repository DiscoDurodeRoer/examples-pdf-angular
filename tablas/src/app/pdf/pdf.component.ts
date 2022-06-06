import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createPDF1(){

    const pdfDefinition: any = {
      content: [
        {
          table: {
            body: [
              [
                'col 1',
                'col 2',
                'col 3'
              ],
              [
                'campo 1',
                'campo 2',
                'campo 3'
              ],
              [
                'campo 4',
                'campo 5',
                'campo 6'
              ],
              [
                'campo 7',
                'campo 8',
                'campo 9'
              ],
            ]
          }
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();

  }

  createPDF2(){

    const pdfDefinition: any = {
      content: [
        {
          table: {
            body: [
              [
                'col 1',
                'col 2',
                'col 3'
              ],
              [
                'campo 1',
                {
                  table:{
                    body: [
                      [
                        'col1',
                        'col2'
                      ],
                      [
                        'col1',
                        'col2'
                      ]
                    ]
                  }
                },
                'campo 3'
              ],
              [
                'campo 4',
                'campo 5',
                'campo 6'
              ],
              [
                'campo 7',
                {
                  table:{
                    body: [
                      [
                        'col1',
                        'col2'
                      ],
                      [
                        'col1',
                        'col2'
                      ]
                    ]
                  }
                },
                'campo 9'
              ],
            ]
          }
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();

  }

  
  createPDF3(){

    const pdfDefinition: any = {
      content: [
        {
          table: {
            widths: ['*', 200, 'auto'],
            body: [
              [
                'col 1',
                'col 2',
                'col 3'
              ],
              [
                'campo 1',
                'campo 2',
                'campo 3'
              ],
              [
                'campo 4',
                'campo 5',
                'campo 6'
              ],
              [
                'campo 7',
                'campo 8',
                'campo 9'
              ],
            ]
          }
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();

  }

  
  createPDF4(){

    const pdfDefinition: any = {
      content: [
        {
          table: {
            heights: [20, 60, 120],
            body: [
              [
                'col 1',
                'col 2',
                'col 3'
              ],
              [
                'campo 1',
                'campo 2',
                'campo 3'
              ],
              [
                'campo 4',
                'campo 5',
                'campo 6'
              ],
              [
                'campo 7',
                'campo 8',
                'campo 9'
              ],
            ]
          }
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();

  }

  
  createPDF5(){

    const pdfDefinition: any = {
      content: [
        {
          table: {
            body: [
              [
                { text: 'col 1', colSpan: 3},
                {},
                {}
              ],
              [
                {text: 'campo 1', rowSpan: 3},
                'campo 2',
                'campo 3'
              ],
              [
                {},
                'campo 5',
                'campo 6'
              ],
              [
                {},
                'campo 8',
                'campo 9'
              ],
            ]
          }
        }
      ]
    }

    const pdf = pdfMake.createPdf(pdfDefinition);
    pdf.open();

  }

}
