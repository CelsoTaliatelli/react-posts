import { Posts } from '.';
import { render, screen } from '@testing-library/react';

const props = {
    posts :[
        {
            id:1,
            title: 'title 3',
            body: 'body 1',
            cover:'img/img1.png'
        }
    ]
}

describe('<Posts />',() => {
    
    it('should render posts',() => {    
        render(<Posts {...props}/>)
    expect(screen.getAllByRole('heading',{name:/title/i}))
        .toHaveLength(1);

    expect(screen.getAllByRole('img',{name:/title/i}))
        .toHaveLength(1);

    expect(screen.getAllByText(/body/i))
        .toHaveLength(1);
    });

    /*it('should  not render posts ', () => {
        render(<Posts />);
        expect(screen.queryByRole('heading',{name:/title/i}))
        .not.toBeInTheDocument();
    });*/

    it('should match snapshot', () => {
        const {container} = render(<Posts{...props}/>);
        expect(container.firstChild).toMatchSnapshot();
    });
})