
// profile

let profileMenu = Array.from(document.querySelectorAll('.profileMenu li'));
let AccountDetails = document.getElementById('AccountDetails');
let profileMenuContent = Array.from(document.querySelectorAll('.profileMenuContent > div'));
let orderTab=Array.from(document.getElementsByClassName('orderTab'));
let orderContent = Array.from(document.querySelectorAll('.orderContent > div'));
let listTab=Array.from(document.getElementsByClassName('listTab'));
let listTabContent = Array.from(document.querySelectorAll('.listTabContent > div'));
let commentTab=Array.from(document.getElementsByClassName('commentTab'));
let commentContent = Array.from(document.querySelectorAll('.commentContent > div'));
let notifTabs = Array.from(document.querySelectorAll('.notifTabs > span'));
let notifTabsContent = Array.from(document.querySelectorAll('.notifTabsContent > div'));
let suggest=Array.from(document.querySelectorAll('.suggest > div'));


profileMenu.forEach((tab) => {
  tab.addEventListener('click', function () {
    profileMenu.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    profileMenuContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

  AccountDetails.addEventListener('click', function () {
    profileMenu.forEach((tabs) => { tabs.classList.remove('active') });
    let tabId = AccountDetails.dataset.id;
    profileMenuContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  });

orderTab.forEach((tab) => {
  tab.addEventListener('click', function () {
    orderTab.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    orderContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

listTab.forEach((tab) => {
  tab.addEventListener('click', function () {
    listTab.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    listTabContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

commentTab.forEach((tab) => {
  tab.addEventListener('click', function () {
    commentTab.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    commentContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

notifTabs.forEach((tab) => {
  tab.addEventListener('click', function () {
    notifTabs.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
    let tabId = tab.dataset.id;
    notifTabsContent.forEach((content) => {
      let contentId = content.dataset.id;
      if (tabId === contentId) {
        content.style.display = 'block';
      } else {
        content.style.display = 'none';
      }
    })
  })
});

suggest.forEach((tab) => {
  tab.addEventListener('click', function () {
    suggest.forEach((tabs) => { tabs.classList.remove('active') });
    tab.classList.add('active');
  })
});