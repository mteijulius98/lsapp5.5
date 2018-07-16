jQuery(document).ready(function($) {

    $('body').on('click', '.sabroso-like-post', function() {
        var $loveLink = $(this);
        var $id = $(this).attr('id');
        var $that = $(this);

        if ($loveLink.hasClass('liked')) return false;
        if ($(this).hasClass('inactive')) return false;

        var $dataToPass = {
            action: 'sabroso-like-post',
            likes_id: $id
        }

        $.post(sabrosoLike.ajaxurl, $dataToPass, function(data) {
            $loveLink.find('span').html(data);
            $loveLink.addClass('liked').attr('title', 'You already like this!');
            $loveLink.find('span').css({
                'opacity': 1,
                'width': 'auto'
            });
        });

        $(this).addClass('inactive');

        return false;
    });


});