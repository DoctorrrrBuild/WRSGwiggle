window.addEventListener('DOMContentLoaded', async () => {
  const wiggleTag = document.querySelector('wrsg-wiggle');
  const engineTag = document.querySelector('doggy-engine');
  if (!wiggleTag || !engineTag) return;

  try {
    // Adding a text headers override unblocks the browser security block
    const response = await fetch(wiggleTag.getAttribute('src'), {
      headers: { 'Content-Type': 'text/plain' }
    });
    const docText = await response.text();
    
    // Inject the raw text safely into the page
    const pre = document.createElement('pre');
    pre.id = 'raw-data';
    pre.style.display = 'none';
    pre.textContent = docText;
    document.body.appendChild(pre);
    
    // Load and run your Doggy engine
    const script = document.createElement('script');
    script.src = engineTag.getAttribute('src');
    document.head.appendChild(script);
  } catch (e) {
    console.error("WRSGwiggle Security Block:", e);
  }
});
