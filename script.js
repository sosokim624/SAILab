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
    const uploadPanel = document.getElementById('uploadPanel');
    const previewFiles = (files) => {
      imagePreview.innerHTML = '';
      const fileList = Array.from(files).slice(0, 9);
      if (fileList.length === 0) {
        const empty = document.createElement('div');
        empty.className = 'preview-item';
        empty.textContent = 'No images selected yet.';
        imagePreview.appendChild(empty);
        return;
      }
      fileList.forEach((file) => {
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
    };

    imageUpload.addEventListener('change', function () {
      previewFiles(this.files);
    });

    if (uploadPanel) {
      ['dragenter', 'dragover'].forEach((eventName) => {
        uploadPanel.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          uploadPanel.classList.add('drag-over');
        });
      });
      ['dragleave', 'drop'].forEach((eventName) => {
        uploadPanel.addEventListener(eventName, (e) => {
          e.preventDefault();
          e.stopPropagation();
          uploadPanel.classList.remove('drag-over');
        });
      });
      uploadPanel.addEventListener('drop', (e) => {
        const files = e.dataTransfer.files;
        if (files && files.length) {
          imageUpload.files = files;
          previewFiles(files);
        }
      });
    }
  }
});
