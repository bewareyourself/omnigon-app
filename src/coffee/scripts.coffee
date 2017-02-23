'use strict'

$(document).ready ->
    $('input:radio:first-child').attr 'checked', true
    $('.app_aside .app_aside_section:nth-child(2) .app_aside_nav li:first-child').addClass('active');
    svg4everybody()


    i = 1
    while i <= 5

        tabClone = $('section[id=\'content-' + i + '\'] div.app_tabs_main').clone(true)
        $('input[id=\'switcher-' + i + '\']').click ->
            if $(this).is(':checked')
                $('div.app_tabs_main').randomize 'div.app_tabs_players', 'div.app_tab_player_item'

            else if $(this).is(':not(:checked)')
                $('div.app_tabs_main').replaceWith tabClone.clone(true)
            return
        i++


$.fn.randomize = (tree, childElem) ->
    @each ->
        $this = $(this)
        if tree
            $this = $(this).find(tree)
        unsortedElems = $this.children(childElem)
        elems = unsortedElems.clone()
        elems.sort ->
            Math.round(Math.random()) - 0.5
        i = 0
        while i < elems.length
            unsortedElems.eq(i).replaceWith elems[i]
            i++
        return

return



