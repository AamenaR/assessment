function handleBookings() {
  var bookingType = document.getElementById('bookingtype').value;
  console.log(bookingType);
  var dateField = document.getElementById("dateField");
  var timeField = document.getElementById("timeField");
  var slotField = document.querySelector('#slotField');

  dateField.style.display = "block";
  slotField.style.display = "none";
  timeField.style.display = 'none';

  if(bookingType === "fullday"){
  slotField.style.display = "none";
  timeField.style.display = 'none';
  }

  if(bookingType === 'halfday'){
    slotField.style.display = "block";
    timeField.style.display = "none";
  }

  if(bookingType === 'hourly'){
    slotField.style.display = "none";
    timeField.style.display = "block";
  }
}