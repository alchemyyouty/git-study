let tabContent,tabButton;

  tabContent = document.querySelectorAll('.Tab-content');
  tabButton  = document.querySelectorAll('.Tab-button');
  
  // tabContent.forEach((el) => {
  //   console.log(tabContent);
  // });

  tabButton  = [].slice.call(tabButton);

  for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].onclick = function(){
      for (let i = 0; i < tabButton.length; i++){
        tabButton[i].classList.remove('current');
      }

      for (let i = 0; i < tabContent.length; i++){
        tabContent[i].classList.remove('current');
      }

      let tabButtonIndex  = tabButton.indexOf(this);
      let tabContentIndex = tabContent[tabButtonIndex];
      this.classList.add('current');
      tabContentIndex.classList.add('current');
    }
  }