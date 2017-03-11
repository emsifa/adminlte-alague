$(function() {
  if ($.ripple) {
    $.ripple([
      '.sidebar-menu li > a',
      '.sidebar-toggle',
      '.navbar-nav li > a',
      '.btn:not(.disabled)'
    ].join(', '), {
      opacity: 0.2, 
      color: "auto", 
      multi: true
    })
  }
})