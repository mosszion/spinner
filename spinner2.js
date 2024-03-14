
/* Spinner animates a spin of a character on the same part of
    the terminal */
    const characterString = "|/-\\|/-\\|\n";
    let delay = 100;
    for (let char of characterString) {
      setTimeout (() => {
        process.stdout.write (`\r${char} `)
      }, delay)
      delay+= 200;
    }
    
    
    