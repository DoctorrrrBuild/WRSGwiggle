window.addEventListener('DOMContentLoaded', async () => {
  const wiggleTag = document.querySelector('wrsg-wiggle');
  const engineTag = document.querySelector('doggy-engine');
  if (!wiggleTag || !engineTag) return;

  try {
    // 1. Fetch your clean .doctor text file lines natively from this repo
    const response = await fetch(wiggleTag.getAttribute('src'));
    const docText = await response.text();
    
    // 2. Inject the text directly into a hidden browser container
    const pre = document.createElement('pre');
    pre.id = 'raw-data';
    pre.style.display = 'none';
    pre.textContent = docText;
    document.body.appendChild(pre);
    
    // 3. Load and execute your custom doggy engine from the d repo
    const script = document.createElement('script');
    script.src = engineTag.getAttribute('src');
    document.head.appendChild(script);
  } catch (e) {
    console.error("WRSGwiggle Error: Could not connect document nodes.", e);
  }
});
