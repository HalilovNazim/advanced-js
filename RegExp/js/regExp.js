let block = document.querySelector('.text');
block.innerHTML = block.innerHTML.replace(/\B'|'\B/gm, '"');
