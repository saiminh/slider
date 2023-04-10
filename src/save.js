import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes }) {
	return (
    <div { ...useBlockProps.save({
      className: 'slider',
    }) }>
      <div className='slider-slides'>
        <InnerBlocks.Content/>
      </div>
      <div className='slider-controls'>
        <button className='slider-control slider-control-prev'>&lt;</button>
        <button className='slider-control slider-control-next'>&gt;</button>
      </div>
    </div>
	);
}
