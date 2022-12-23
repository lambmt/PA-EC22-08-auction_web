import classNames from 'classnames/bind';
import styles from './DescriptionProduct.module.scss';


const cx = classNames.bind(styles);

function DescriptionProduct({ data }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('title')}>
                <div className={cx('text')}>
                    description
                    <div className={cx('dot')}></div>
                </div>
            </div>

            <div className={cx('content')}>
                Classic 2.01 Ct brilliant round solitaire diamond earrings in 14K white gold. These natural diamond studs are GAI certified, along with full jewelry appraisal. A large central diamond (about the size of an engagement ring) is set on each earring. A pair of 1 carat round diamonds plus each IJ color graded solitaire round diamond of SI3-I1 clarity (enhanced earth-mined diamonds) set on push stud earrings reverse in this 14k white gold.
            </div>
        </div>
    );
}

export default DescriptionProduct;