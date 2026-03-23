'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const copyBtn = document.querySelector('.copy-btn');
  const codeElement = document.getElementById('code-content');
  const copyText = copyBtn?.querySelector('.copy-text');

  if (copyBtn && codeElement) {
    copyBtn.addEventListener('click', async () => {
      copyBtn.disabled = true;

      try {
        const codeText = codeElement.textContent.trim();
        await navigator.clipboard.writeText(codeText);
        copyBtn.classList.add('copied');
        copyBtn.classList.remove('error');
        setTimeout(() => {
          copyBtn.classList.remove('copied', 'error');
          copyBtn.disabled = false;
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
        copyBtn.classList.add('error');
        copyBtn.classList.remove('copied');
        setTimeout(() => {
          copyBtn.classList.remove('copied', 'error');
          copyBtn.disabled = false;
        }, 2000);
      }
    })
  }
})