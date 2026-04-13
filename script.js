document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  const imageUpload = document.getElementById('imageUpload');
  const imagePreview = document.getElementById('imagePreview');

  if (imageUpload && imagePreview) {
    imageUpload.addEventListener('change', function () {
      imagePreview.innerHTML = '';
      const files = Array.from(this.files).slice(0, 9);
      if (files.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'preview-item';
        empty.textContent = 'No images selected yet.';
        imagePreview.appendChild(empty);
        return;
      }
      files.forEach((file) => {
        const reader = new FileReader();
        reader.onload = function (e) {
          const preview = document.createElement('div');
          preview.className = 'preview-item';
          const img = document.createElement('img');
          img.src = e.target.result;
          img.alt = file.name;
          preview.appendChild(img);
          imagePreview.appendChild(preview);
        };
        reader.readAsDataURL(file);
      });
    });
  }
});
