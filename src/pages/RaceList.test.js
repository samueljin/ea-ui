import renderer from 'react-test-renderer';
import RaceList from './RaceList';
import * as reactRedux from 'react-redux'

describe('test suite', () => {
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
 // const useHistoryMock = jest.spyOn(reactRedux, 'useHistory')

  beforeEach(() => {
    useSelectorMock.mockClear()
    useDispatchMock.mockClear()
    //useHistoryMock.mockClear()
  })

  it('click sort button to refresh the page', () => {
    const dummyDispatch = jest.fn()
    useDispatchMock.mockReturnValue(dummyDispatch)

    const dummySelector = jest.fn()
    useSelectorMock.mockReturnValue(dummySelector)

    const render = renderer.create(<RaceList/>);
    let tree = render.toJSON();
    expect(tree).toMatchSnapshot();

    // version incompatible  
    //  render.act(() => {
    //    tree.props.handleSort();
    // });
    // re-rendering
    //  tree = render.toJSON();
    //  expect(tree).toMatchSnapshot();

  })
})


  