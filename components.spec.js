import React from "react";
import {expect} from "chai";
import {shallow, mount} from "enzyme";
import {BeerListContainer, InputArea, BeerList} from "./components";
import {spy} from "sinon";

describe("BeerListContainer", () => {
    const wrapper = shallow(<BeerListContainer/>);
    const inputArea = wrapper.find(InputArea);
    it("should render inputArea and BeerList", () => {
        expect(wrapper.containsAllMatchingElements([
            <InputArea/>,
            <BeerList/>]
        )).to.equal(true);
    });
    it("should start with and empty list", () => {
        //const wrapper = shallow(<BeerListContainer/>);
        expect(wrapper.state("beers")).to.eql([]);
    });
    it("add items to the list", () => {
        //const wrapper = shallow(<BeerListContainer/>);
        wrapper.instance().addItem("Sam Adams");
        expect(wrapper.state("beers")).to.eql(["Sam Adams"]);
    });
    it("passes addItem to inputArea", () => {
        const addItem = wrapper.instance().addItem;
        expect(inputArea.prop("onSubmit")).to.eql(addItem);
    });
    it("passes a bound addItem function to inputArea", () => {
        //instantiating temporaly again
        let wrapper = shallow(<BeerListContainer/>);
        let inputArea = wrapper.find(InputArea);
        inputArea.prop("onSubmit")("Sam Adams");
        expect(wrapper.state("beers")).to.eql(["Sam Adams"]);
    });
    it("renders the items", () => {
        let wrapper = mount(<BeerListContainer/>);
        wrapper.instance().addItem("Sam Adams");
        wrapper.instance().addItem("Resin");
        expect(wrapper.find("li").length).to.equal(2);
    });
});

describe("InputArea", () => {
    const wrapper = mount(<InputArea/>);
    const input = wrapper.find("input");
    it("should contain an input and a button", () => {
        expect(wrapper.containsAllMatchingElements([
            <input/>,
            <button>Add</button>])).to.equal(true);
    });
    it("should accept input", () => {
        //Firing onChange event
        input.simulate("change", {target: {value: "Resin"}});
        expect(wrapper.state("text")).to.equal("Resin");
        expect(input.prop("value")).to.equal("Resin");
    });
    it("should call onSubmit when Add is clicked", () => {
        const addItemSpy = spy();
        //instantiating because of onSubmit event spy
        let wrapper = shallow(<InputArea onSubmit={addItemSpy}/>);
        wrapper.setState({text: "Octoberfest"});
        const addButton = wrapper.find("button");
        addButton.simulate("click");

        expect(addItemSpy.calledOnce).to.equal(true);
        expect(addItemSpy.calledWith("Octoberfest")).to.equal(true);
    });
});

describe("BeerList", () => {
    it("should render zero items", () => {
        const wrapper = shallow(<BeerList items={[]}/>);
        expect(wrapper.find("li")).to.have.length(0);
    });
    it("should render undefined items", () => {
        const wrapper = shallow(<BeerList items={undefined}/>);
        expect(wrapper.find("li")).to.have.length(0);
    });
    it("should render some items", () => {
        const wrapper = shallow(<BeerList items={["Sam Admas", "Resin", "Obctoberfest"]}/>);
        expect(wrapper.find("li")).to.have.length(3);
    });
});