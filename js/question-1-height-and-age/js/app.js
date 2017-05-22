var ageGroupings = [];
var heightEstimations = [];

$(function()
{
    $('#form').on('submit', function(event)
    {
        //Process classification only once all fields are filled
        if(this.checkValidity())
        {
            event.preventDefault();
            getClassification();
        }
    });
    
    $('#submit').on('click', function()
    {
        //Call form submit so as to use HTMLs checkValidity method
        $('#form').submit();
    });
    
    initializeData();
});

//Initialize classification data
function initializeData()
{
    ageGroupings.push(new AgeGroup('Child', 2, 12));
    ageGroupings.push(new AgeGroup('Teenager', 13, 20));
    ageGroupings.push(new AgeGroup('Adult', 21, 65));
    ageGroupings.push(new AgeGroup('Senior', 65, 200));
    
    heightEstimations[2]=86.8;
    heightEstimations[3]=95.2;
    heightEstimations[4]=102.3;
    heightEstimations[5]=109.2;
    heightEstimations[6]=115.5;
    heightEstimations[7]=121.9;
    heightEstimations[8]=128;
    heightEstimations[9]=133.3;
    heightEstimations[10]=138.4;
    heightEstimations[11]=143.5;
    heightEstimations[12]=149.1;
    heightEstimations[13]=156.2;
    heightEstimations[14]=163.8;
    heightEstimations[15]=170.1;
    heightEstimations[16]=173.4;
    heightEstimations[17]=175.2;
    heightEstimations[18]=175.7;
    heightEstimations[19]=176.5;
    heightEstimations[20]=177;
}

function getClassification()
{
    var age = $('#user-age').val();
    var height = $('#user-height').val();
    
    var ageClassification = getAgeClassification(age);
    var heightClassification = getHeightClassification(age, height);
    
    $('#input-result').html(ageClassification + '<br />&<br />' + heightClassification);
    showResults(true);
}

function getAgeClassification(aAge)
{
    for(var i = 0; i < ageGroupings.length; i++)
    {
        var ageGrouping = ageGroupings[i];
        if(aAge >= ageGrouping.minAge && aAge <= ageGrouping.maxAge)
        {
            return ageGrouping.name;
        }
    }
}

function getHeightClassification(aAge, aHeight)
{
    var heightClassification = 'Average';
    
    //Adult height is assumed to not vary much after age 20
    if(aAge > 20)
    {
        aAge = 20;
    }
    
    if(aHeight - heightEstimations[aAge] > 10)
    {
        heightClassification = 'Tall';
    }
    else if(aHeight - heightEstimations[aAge] < -10)
    {
        heightClassification = 'Short';
    }
    
    return heightClassification;
}

//Reveals the classification results
function showResults(show)
{
    if(show)
    {
        $('#result').css('opacity', 1);
    }
    else
    {
        $('#result').css('opacity', 0);
    }
}


function AgeGroup(aName, aMinAge, aMaxAge)
{
    this.name = aName;
    this.minAge = aMinAge;
    this.maxAge = aMaxAge;
}