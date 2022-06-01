function seleccionoPDF(evt) {
  evt.stopPropagation();
  evt.preventDefault();

  let archivos = evt.dataTransfer.archivos; 

  let salida = [];
  for (let i = 0, f; f = archivos[i]; i++) {
    salida.push('<li><strong>', f.name, '</strong> (', f.type || 'n/a', ') - ',
                f.size, ' bytes, fecha mod.: ',
                f.lastModifiedDate.toLocaleDateString(), '</li>');
  }
  document.getElementById('listaPDF').innerHTML = '<ul>' + salida.join('') + '</ul>';
}

function arrastro(evt) {
  evt.stopPropagation();
  evt.preventDefault();
  evt.dataTransfer.dropEffect = 'copy';
}

let dropZone = document.getElementById('drop_pdfs');
dropZone.addEventListener('dragover', arrastro, false);
dropZone.addEventListener('drop', seleccionoPDF, false);