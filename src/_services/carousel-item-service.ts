import {CarouselItem} from '../_models/carousel-item';


export const CAROUSEL_ITEMS: CarouselItem[] = [

  {
    title: 'LUMC',
    description: 'Leids Universitair Medisch Centrum',
    url:  'data:image/png;base64,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'
  },

];
