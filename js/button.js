$(document).ready(function() {
    $('#redirectButton').click(function() {
      redirectToStore();
    });

    function redirectToStore() {
      var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

      if (isIOS) {
        window.location.href = 'https://apps.apple.com/kr/app/%ED%97%A4%EC%96%B4%EB%B9%84/id6452395655';
      } else {
        window.location.href = 'https://play.google.com/store/apps/details?id=com.atowner.hairbe'; 
      }
    }
  });