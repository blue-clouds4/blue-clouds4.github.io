document.getElementById('command').addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    const command = e.target.value.trim().toLowerCase();
    const output = document.getElementById('command-output');
    let response = '';

    switch (command) {
      case 'help':
        response = `
          <div>
            <p><strong>help</strong>: List all commands</p>
            <p><strong>mefetch</strong>: About me</p>
            <p><strong>socialfetch</strong>: Social media links</p>
            <p><strong>cmatrix</strong>: Put this because I was bored</p>
            <p><strong>load(gui)</strong>: Load the GUI version of this website</p>
            <p><strong>clear</strong>: Clear the screen</p>
            <p><strong>repo</strong>: Shows the source files of the website</p>
          </div>`;
        break;
      case 'mefetch':
        response = `
          <pre style="color: #ffc482;">
                 .                      .              --->name: Blue_clouds
                 .                      ;             |->weaving dreams for the virtual sky
                 :                  - --+- -          |->i have no idea what I'm doing with my life
                 !           .          !             |->i need sleep
                 |        .             .             |->i love coding, music, experimenting with things
                 |_         +                          --->lived since: December, 2008
              ,  | \`.                                  
        --- --+-<#>-+- ---  --  -
              \`._|_,'
                 T
                 |
                 !
                 :         . : 
                 .       *
          </pre>`;
        break;
      case 'socialfetch':
        response = `
          <div>
            <p><a href="https://github.com/blue-clouds4" target="_blank" class="data-link">GitHub</a></p>
            <p><a href="https://www.instagram.com/blue_harsha/" target="_blank" class="data-link">Instagram</a></p>
          </div>`;
        break;
      case 'cmatrix':
        response = `<p>Running cmatrix... (Matrix effect)</p>`;
        runCmatrix();
        break;
      case '1986':
        response = `<p>1986 - A hidden gem!</p>`;
        break;
      case 'repo':
        response = `
          <div>
            <p><a href="https://github.com/blue-clouds4/blue-clouds4.github.io/tree/main" target="_blank" class="data-link">source-file</a></p>
          </div>`;
        break;
      case 'load(gui)':
        response = `<p>Loading GUI...</p>`;
        window.location.href = "https://blue-clouds4.github.io/gui-version-oftheweb/";
        break;
      case 'clear':
        output.innerHTML = '';
        break;
      default:
        response = `<p class="command-not-found">Command not found: ${command}</p>`;
    }

    if (command !== 'clear') {
      output.innerHTML += `<div>${response}</div>`;
    }

    e.target.value = '';
  }
});

function runCmatrix() {
  const output = document.getElementById('command-output');
  let matrixInterval = setInterval(() => {
    let matrixLine = '';
    for (let i = 0; i < 60; i++) {
      matrixLine += Math.random() > 0.5 ? '1' : '0';
    }
    const matrixDiv = document.createElement('div');
    matrixDiv.style.color = '#00ff00';
    matrixDiv.textContent = matrixLine;
    output.appendChild(matrixDiv);
    if (output.children.length > 20) {
      output.removeChild(output.firstChild);
    }
  }, 100);

  setTimeout(() => {
    clearInterval(matrixInterval);
  }, 5000);
}
