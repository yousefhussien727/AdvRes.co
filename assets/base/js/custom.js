/**
 Custom JS
 **/

// BEGIN: Toggle Language Button Function
function toggleLanguage() {
    // Get the current page's URL splitted in array
    var currentUrlSplited = window.location.pathname.split('/');

    // Check the current language and toggle to the opposite
    var newLanguage = (currentUrlSplited[1]=='en') ? 'ar' : 'en';
    // console.log(newLanguage);

    // Construct the new URL for the toggled language
    var newUrl = '../' + newLanguage + '/' + currentUrlSplited[2];
    // console.log(newUrl);

    // Set the href attribute of the link to the new URL
    document.getElementById('languageToggleLink').href = newUrl;
}
// END

// BEGIN: Get & Update the current year at the footer dynamically
document.getElementById('currentYear').innerText = new Date().getFullYear();
// END

// BEGIN: Get & Update the current year at the footer dynamically
document.getElementById('catalogLink').href = "../assets/base/media/pdf/Products Portfolio - AdvResCo.pdf";
// END