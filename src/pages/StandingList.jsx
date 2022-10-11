import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, Spinner, InputGroup, FormControl } from "react-bootstrap";
import { standingsActions } from '../redux/actions/standings.actions';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import { useHistory } from "react-router-dom";

function StandingList() {

    const emp = useSelector(state => state.standings);
    const dispatch = useDispatch();
    let history = useHistory();
    const [sortType, setSortType] = useState("ASC");

    useEffect(() => {
        dispatch(standingsActions.getStandingsByYear());
    }, []);


    const handleSelect = (e) => {
        if (e === '2021RaceResult') {
            history.push("/race")
        } else if (e === '2021RaceResult') {

        }
    }

    const handleSort = (e) => {
        (sortType == "ASC") ? setSortType("DES") : setSortType("ASC")
        dispatch(standingsActions.sortByPosition(sortType));
    }

    return (
        <div>
            <div class="row">
                <div class="col-10">
                    <DropdownButton
                        title="race results"
                        id="race"
                        onSelect={handleSelect}
                    >
                        <Dropdown.Item eventKey="2021RaceResult">2021 Race Results</Dropdown.Item>
                        <Dropdown.Item eventKey="2022RaceResult">2022 Race Results</Dropdown.Item>
                        <Dropdown.Item eventKey=""></Dropdown.Item>
                    </DropdownButton>
                </div>
                <InputGroup className="col-2">
                    <Button class="btn btn-info" id="button-addon2" onClick={handleSort}>
                        Sort
                    </Button>
                </InputGroup>

            </div>
            {emp.loading && <Spinner animation="border" variant="primary" />}
            {emp.loadingError && <span className="text-danger">ERROR: {emp.error}</span>}

            {emp.items &&
                <div className="grid">
                    {emp.items.map((em, index) => {
                        return (
                            <Card className="d" style={{ width: "15rem" }}>
                                <Card.Body>
                                    <Card.Title>{em.position + ": " + em.Driver.givenName + " " + em.Driver.familyName}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">points: {em.points}</Card.Subtitle>

                                    <Card.Text>
                                        <p className="card-text">
                                            <small>
                                                born in {em.Driver.dateOfBirth} year,  live in  {em.Driver.nationality}
                                            </small>
                                        </p>
                                    </Card.Text>
                                    <Card.Link href={em.Driver.url}>about...</Card.Link>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </div>
            }

        </div>
    );
}

export default StandingList;