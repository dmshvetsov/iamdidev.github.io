$(window).load( function () {
  arangeLines();
  
  function arangeLines () {
    $('.highlight-block').each( function () {
      var $text = $(this),
          lines = [],
          block = "",
          top;
          
      $text.html($text.text().replace(/(\.+|\S+)/g, '<span>$1</span>'));
      
      
      var n = 0;
      $text.children().each(function() {
          var $this = $(this),
              _top = $this.position().top;
              
          // if ($this.attr("class")) return;
          
          if (top === undefined) {
            top = _top;
            lines[n] = [$this.text()];
          } else if (top < _top ) {
            top = _top;
            n++;
            lines[n] = [$this.text()];
          } else {
            lines[n].push($this.text());
          }
      });
      for (var i = lines.length, j = 0; j < i; j+=1) {
        block += '<span class="highlight-marked"><span class="left-corner"></span>' + lines[j].join(" ") + '<span class="right-corner"></span></span>' + " "
      }
    
      $text.html(block);
    });
  }
  
  $(window).resize(function () {
    arangeLines();
  });
});