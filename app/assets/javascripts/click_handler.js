function linkTo(domNode, link) {
  $(domNode).click(() => {
    window.location = link;
  });
}

$(document).ready(()=>{
  linkTo('.for-brown', 'https://www.brown.edu/academics/brain-science/');
  linkTo('.events', 'https://bit.ly/Mj3ibo');
  linkTo('.donate', 'http://giving.brown.edu/priorities/brain-science');
  linkTo('.news', 'https://www.brown.edu/academics/brain-science/news');
  linkTo('.feature-text', 'https://vivo.brown.edu/display/gbarnea');
});
