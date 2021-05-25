import 'instantsearch.css/themes/algolia-min.css';
import React from 'react';
import { Link } from "react-router-dom";
//import { ToggleRefinement } from 'react-instantsearch-dom';
import { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
//import { PopoverBody, UncontrolledPopover } from "reactstrap";

import { InstantSearch,  InfiniteHits,  SearchBox,  Stats,  Highlight} from 'react-instantsearch-dom';
import './App.css';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import ReactDOM from 'react-dom';

function App(props) {

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const { indexName } = props
  const searchClient = instantMeiliSearch(
    //'http://ec2-65-2-33-201.ap-south-1.compute.amazonaws.com/',
    'https://meili-router-f1agakpcjuab75hu-gtw.qovery.io/',
    'masterKey',
    {
      paginationTotalHits: 60,
      primaryKey: 'id',
    }
  )
  return (
    <>
      <div lg="4" md="6">
        <Button color="danger" className="btn-sm" style={{ height:"25px", width:"40px", top:"15px"}}  onClick={toggle}> <i className="fa fa-search" aria-hidden="true"></i></Button>
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
                  {/*<Configure hitsPerPage={1} />*/}
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
          <Highlight attribute="Title" hit={props.hit} />
        </Col>
        <Link className="hit-name" to={props.hit.url} onClick={() => {window.location.href=props.hit.url}}> 
          <Col className="hit-name" >
            <Highlight attribute="description" hit={props.hit} />
        </Col>
        </Link>
        {/*<Highlight attribute="description" hit={props.hit.description} />*/}
      </Row>
    </Container>
  )
}

ReactDOM.render(
  <App indexName="searchdata" />,
  document.getElementById('root')
);
export default App