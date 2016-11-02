function linkTo(domNode, link) {
  $(domNode).click(() => {
    window.location = link;
  });
}

function toggleShowing(jQueryObj) {
  if (jQueryObj.hasClass('hidden')) {
    jQueryObj.removeClass('hidden');
  } else {
    jQueryObj.addClass('hidden');
  }
}

function toggleCaret(jQueryObj) {
  if (jQueryObj.hasClass('fa-caret-right')) {
    jQueryObj.removeClass('fa-caret-right');
    jQueryObj.addClass('fa-caret-down');
    window.scrollTo(0, 2000);
  } else {
    jQueryObj.removeClass('fa-caret-down');
    jQueryObj.addClass('fa-caret-right');
  }
}

$(document).ready(()=>{
  linkTo('.for-brown', 'https://www.brown.edu/academics/brain-science/');
  linkTo('.events', 'https://bit.ly/Mj3ibo');
  linkTo('.donate', 'http://giving.brown.edu/priorities/brain-science');
  linkTo('.news', 'https://www.brown.edu/academics/brain-science/news');
  $('.feature-1-title').click(() => {
    toggleShowing($('.feature-dropdown--1'));
    toggleCaret($('.fa-caret--1'));
  });
});
