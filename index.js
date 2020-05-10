/*
To complete this challenge requires:

Using DOM manipulation and traversal to dynamically add and remove HTML elements and apply styles.

-Linking to an externally hosted library (jQuery) and a locally hosted JavaScript file (index.js).

-Linking to your application JavaScript file from the index.html page.

Using this and event delegation.

REQUIREMENTS:
In terms of user experience, your shopping list app must allow users to:

>Enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
>Check and uncheck items on the list by clicking the "Check" button
>Permanently remove items from the list

>You must use a CDN-hosted version of jQuery
>Put your application code in a file called index.js and link to it in index.html
>Be sure to put both script elements at the bottom of the <body> element.

*/

//const shopItem = $(event.currentTarget).parents('li');


//Append to end

$(function () {
    $('button[type="submit"]').click(function () {
        const mylist = $('#shopping-list-entry').val();
        $('.shopping-list').append(`
        <li>
        <span class="shopping-item">${mylist}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>
        `)
        return false;
    })

})
//"Check" button clicked
$(function completed() {

    console.log('Selecting...')
    $(".shopping-list").on("click", ".shopping-item-toggle", function (event) {
        console.log('Event is:', event)
        const $name = $(event.currentTarget).parents('li').find('.shopping-item')
        $name.toggleClass('shopping-item__checked')
    });

})


//"Delete" button removing items

$(function () {
    $(".shopping-list").on("click", ".shopping-item-delete", function (event) {
        event.preventDefault();
        event.stopPropagation();
        //const $li = $(event.currentTarget).parents('li')
        //$li.remove()
        $(this).parents('li').remove();
    });

})

