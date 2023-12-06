import React from 'react';
import resume from '../assets/resume.pdf';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


function ResumePdf() {
    
    return(
        <div className='res'>
            <h2 className='heading'></h2>
            <Document
                file={resume}
                onLoadError={console.error}
                style={{ width: '100vw', height: 'auto'}}
            >
                <Page pageIndex={0}/>
            </Document>
            
        </div>
    )
}

export default ResumePdf;