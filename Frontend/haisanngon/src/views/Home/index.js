import classNames from 'classnames';
import CardContainer from '~/components/Layout/components/Card/CardContainer';
import KnowledgeCard from '~/components/Layout/components/Card/KnowledgeCard';
import HomeFeature from './HomeFeature';
import HomeTop from './HomeTop';
const cx = classNames.bind();
function Home() {
    return (
        <div className={cx('')}>
            <HomeTop />

            <HomeFeature />

            <CardContainer />

            <KnowledgeCard />
        </div>
    );
}

export default Home;
