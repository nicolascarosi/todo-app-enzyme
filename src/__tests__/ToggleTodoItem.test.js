import {mount} from 'enzyme';
import {Todo} from '../todo/Todo';

describe("check todo item", () => {
    it("isToggled", () => {

        const app = mount(<Todo />);

        app.find('[data-testid="todo-item-1"]').simulate('doubleclick');
        expect(app.find('[data-testid="pending-todos"]').text()).toEqual("1");
        app.find('[data-testid="todo-item-1"]').simulate('doubleclick');
        expect(app.find('[data-testid="pending-todos"]').text()).toEqual("2");
    })
})
