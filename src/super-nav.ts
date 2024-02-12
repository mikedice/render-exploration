export function setupSuperNav(idSelector: string){
    document.querySelector<HTMLDivElement>(idSelector)!.innerHTML = `
    <div id="nav-container">
        <button class="nav-button">Button 1</button>
        <button class="nav-button">Button 2</button>
        <button class="nav-button">Button 3</button>
        <button class="nav-button">Button 4</button>
        <div id="highlight"></div>
    </div>`

    const buttons: HTMLButtonElement[] = Array.from(document.querySelectorAll('.nav-button'));
    let focusedButtonIndex: number = buttons.findIndex(button => button === document.activeElement);
    
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        focusedButtonIndex = (focusedButtonIndex + 1) % buttons.length;
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        focusedButtonIndex = (focusedButtonIndex - 1 + buttons.length) % buttons.length;
      }
    
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
        buttons[focusedButtonIndex].focus();
      }
    });

    window.addEventListener('click', (event: MouseEvent) => {
      if (event.target instanceof HTMLButtonElement) {
        focusedButtonIndex = buttons.indexOf(event.target);
      }
    });
}