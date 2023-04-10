import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import { InnerBlocks } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	return (
		<div { ...useBlockProps({
      className: 'slider',
    }) }>
			<div className='slider-slides'>
        <InnerBlocks
          allowedBlocks={['create-block/slide']}
          template={[
            ['create-block/slide'],
            ['create-block/slide'],
            ['create-block/slide'],
          ]}
          templateLock={false}
        />
      </div>
		</div>
	);
}
