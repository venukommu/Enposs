import 'instantsearch.css/themes/algolia-min.css';
import React from 'react';
import { Link } from "react-router-dom";
//import { ToggleRefinement } from 'react-instantsearch-dom';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { PopoverBody, UncontrolledPopover } from "reactstrap";

import {
  Container,
  Row,
  Col
} from "reactstrap";
import {
  InstantSearch,
  InfiniteHits,
  SearchBox,
  Stats,
  Highlight,
  Configure,
} from 'react-instantsearch-dom'
import './App.css'
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import ReactDOM from 'react-dom';

function App(props) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { indexName } = props
  const searchClient = instantMeiliSearch(
    'http://127.0.0.1:7700',
    'masterKey',
    {
      paginationTotalHits: 60,
      primaryKey: 'id',
    }
  )
  return (
    <>
      <Button color="white" id="tooltip348236073" type="button">
        <i class="fa fa-search" aria-hidden="true"></i>
      </Button>
      <UncontrolledPopover
        placement="top"
        target="tooltip348236073"
        className="popover-secondary"
      >
        <PopoverBody>
          <InstantSearch indexName={indexName} searchClient={searchClient}>
            <Stats />
            <div className="right-panel">
              <SearchBox searchAsYouType={true}
                focusShortcuts={['s']}
                onSubmit={event => {
                  event.preventDefault();
                  //console.log(event.currentTarget);
                }}
              /><br />
              <Configure hitsPerPage={1} />
              <InfiniteHits hitComponent={Hit} xs="6" />
            </div>
          </InstantSearch>
        </PopoverBody>
      </UncontrolledPopover>



      <div lg="4" md="6">
        <Button color="danger" height="18" onClick={toggle}> <i class="fa fa-search" aria-hidden="true"></i></Button>
        <Modal isOpen={modal} toggle={toggle} className="modal-xl">
          <ModalHeader toggle={toggle}>Website content Search</ModalHeader>
          <ModalBody>
            <div className="ais-InstantSearch">
              <InstantSearch indexName={indexName} searchClient={searchClient}>
                <Stats />
                <div className="right-panel">
                  <SearchBox searchAsYouType={true}
                    focusShortcuts={['s']}
                    onSubmit={event => {
                      event.preventDefault();
                      //console.log(event.currentTarget);
                    }}
                  /><br />
                  <Configure hitsPerPage={1} />
                  <InfiniteHits hitComponent={Hit} xs="6" />
                </div>
              </InstantSearch>
            </div>
          </ModalBody>
          <ModalFooter>
            {/*<Button color="primary" onClick={toggle}>Do Something</Button>{' '}*/}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  )
}
function Hit(props) {
  return (
    <Container>
      <Row key={props.hit.id}>
        <Col className="hit-name" lg="4">
          <Highlight attribute="title" hit={props.hit} />
        </Col>
        <Link className="hit-name" to={props.hit.url}>
          <Col className="hit-name text" >
            <Highlight attribute="description" hit={props.hit} />
          </Col>
        </Link>
        <Highlight attribute="description" hit={props.hit.description} />
      </Row>
    </Container>
  )
}

function tip(enpossproduct) {
  console.log(enpossproduct);
  return (
    <Container>
      <Row key={enpossproduct.hit.id}>
        <Col className="hit-name" lg="4">
          <Highlight attribute="title" hit={enpossproduct.hit} />
        </Col>
        <Col className="hit-name" >
          <Highlight attribute="description" hit={enpossproduct.hit} />
        </Col>
        <Col className="hit-name">Title: {enpossproduct.hit.label}</Col>
        <Highlight attribute="description" hit={enpossproduct.hit.label} />
      </Row>
    </Container>
  )
}
ReactDOM.render(
  <App indexName="product" />,
  document.getElementById('root')
);
export default App