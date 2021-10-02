import{ render, screen } from '@testing-library/react';
import { PostCard} from '.';
import { postCardmock } from './mock';

const mock = postCardmock;

describe('<PostCard />', () => {
    it('should render PostCard correctly', () => {
        render(<PostCard {...mock} />);

        expect(screen.getByRole('img', {name:mock.title})).toBeInTheDocument();
        expect(screen.getByRole('img', {name:mock.title})).toHaveAttribute('src','img/img.png');
        expect(screen.getByText('body 1')).toBeInTheDocument();
    });

    it('should match snapshot', () => {
        const {container} = render(<PostCard {...mock}/>);
        expect(container.firstChild).toMatchSnapshot();
    })
})