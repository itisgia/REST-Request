var key;
$.ajax({
    url: "config.json",
    dataType: "json",
    type: "GET",
    success: function functionName(data) {
      key = data["0"].API_KEY;
      // getData(1);
    },
    error : function functionName(error) {
      console.log("ERROR");
      console.log(error);
    }
});


//can't start writing ajax again . ajaza is async.. so it  won't wait till other functuon wait. so best way is creat a functio
function getData(minAge) {
    $.ajax({
      //min age and key parameters what's going to help us built us up
        url: "https://my.api.mockaroo.com/peopleData.json?min_age="+minAge+"&key="+key,
        dataType: "json",
        type: "GET",
        success: function functionName(mockerooData) {
          console.log(mockerooData);
        },
        error : function functionName(error) {
          console.log("ERROR");
          console.log(error);
        }
    })
}

function getCurrencyCode(currency) {
    $.ajax({
      //min age and key parameters what's going to help us built us up
        url: "https://my.api.mockaroo.com/peopleData.json?"+money_symbol+"&key="+key,
        dataType: "json",
        type: "GET",
        success: function functionName(mockerooData) {
          console.log(mockerooData);
        },
        error : function functionName(error) {
          console.log("ERROR");
          console.log(error);
        }
    })
}

$("#ageForm").submit(function functionName() {
    event.preventDefault();
    var minAge = $("input[name='minAge']").val();
    var currency = $("#selectWrapper")
    getData(minAge);
})

var currency = $("#selectWrapper");
console.log(currency);
