window.onload = () => {
  lazyYT.init();
};

lazyYT = {
  init: () => {
    console.log('lazyYT.init()');
    const yt = document.querySelectorAll('.lazyYT');

    for (let i = 0; i < yt.length; i++) {
      const source = `/assets/images/lazyYT_${yt[i].dataset.embed}.webp`;
      const image = new Image();
      image.setAttribute('width', '640px');
      image.setAttribute('height', '360px');
      image.setAttribute('alt', yt[i].dataset.title);
      image.src = source;

      image.addEventListener('load', () => {
        yt[i].appendChild(image);
      });

      const ytVideoTitle = document.createElement('span');
      ytVideoTitle.classList.add('yt-video-title');
      ytVideoTitle.innerHTML = yt[i].dataset.title;
      yt[i].appendChild(ytVideoTitle);

      yt[i].addEventListener('click', () => {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');
        iframe.setAttribute(
          'src',
          `https://www.youtube.com/embed/${yt[i].dataset.embed}?rel=0&showinfo=0&autoplay=1`
        );
        yt[i].innerHTML = '';
        yt[i].appendChild(iframe);
      });
    }
  },
};
