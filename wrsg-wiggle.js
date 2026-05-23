window.addEventListener('DOMContentLoaded', async () => {
  const wiggleTag = document.querySelector('wrsg-wiggle');
  const engineTag = document.querySelector('doggy-engine');
  if (!wiggleTag || !engineTag) return;

  try {
    const response = await fetch(wiggleTag.getAttribute('src'), {
      headers: { 'Content-Type': 'text/plain' }
    });
    if (!response.ok) throw new Error("File not found");
    const docText = await response.text();
    
    const pre = document.createElement('pre');
    pre.id = 'raw-data';
    pre.style.display = 'none';
    pre.textContent = docText;
    document.body.appendChild(pre);
    
    const script = document.createElement('script');
    script.src = engineTag.getAttribute('src');
    document.head.appendChild(script);
  } catch (e) {
    document.body.innerHTML = `<h1 style="font-family:sans-serif;padding:40px;color:red;">WRSGwiggle Error: ${e.message}</h1>`;
  }
});
