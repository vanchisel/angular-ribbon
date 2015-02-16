angular.module('ngRibbon', ['ngAnimate', 'ngRibbon.actions', 'ngRibbon.menu', 'ngRibbon.utils'])
    .factory('contextualColors', [contextualColors])
    .factory('dynamicRibbon', [DynamicRibbonProvider])
    .controller('RibbonController', ['$scope', '$element', '$document', 'ribbonEvents', 'contextualColors', 'clickHandler', RibbonController])
    .controller('BackstageController', [BackstageController])
    .directive('ngRibbon', ['$templateCache', 'clickHandler', 'dynamicRibbon', ngRibbonDirective])
    .directive('ngRibbonTitle', ['$document', 'ribbonEvents', 'optimizedResize', ngRibbonTitleDirective])
    .directive('ngRibbonBackstage', [ngRibbonBackstageDirective])
    .directive('ngRibbonBackstageContent', [ngRibbonBackstageContentDirective])
    .directive('ngRibbonTab', [ngRibbonTabDirective])
    .directive('ngRibbonGroup', ['$compile', 'dynamicRibbon', ngRibbonGroupDirective]);