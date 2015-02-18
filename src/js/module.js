import { DynamicRibbonProvider } from './dynamicRibbon.service';
import { ContextualColors } from './contextualColors.service';
import { ContextualGroup } from './ContextualGroup';
import { BackstageController } from './Backstage.controller';

angular.module('ngRibbon', ['ngAnimate', 'ngRibbon.actions', 'ngRibbon.menu', 'ngRibbon.utils', 'ngRibbon.templates'])
    .provider('dynamicRibbon', [DynamicRibbonProvider])
    .service('contextualColors', [ContextualColors])
    .controller('RibbonController', ['$scope', '$element', '$document', 'ribbonEvents', 'contextualColors', 'clickHandler', RibbonController])
    .controller('BackstageController', [BackstageController])
    .directive('ngRibbon', ['$templateCache', 'clickHandler', 'dynamicRibbon', ngRibbonDirective])
    .directive('ngRibbonTitle', ['$document', 'ribbonEvents', 'optimizedResize', ngRibbonTitleDirective])
    .directive('ngRibbonBackstage', [ngRibbonBackstageDirective])
    .directive('ngRibbonBackstageContent', [ngRibbonBackstageContentDirective])
    .directive('ngRibbonTab', [ngRibbonTabDirective])
    .directive('ngRibbonGroup', ['$compile', 'dynamicRibbon', ngRibbonGroupDirective]);
