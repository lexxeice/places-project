(function() {
  document.addEventListener("turbolinks:load", function init_static_map() {
    static_map = new google.maps.Map(document.getElementById('static_map'), {
      zoom: 10,
      center: {lat: 53.928365, lng: 27.685359},
      mapTypeId: 'satellite'
    });
  });
})();




