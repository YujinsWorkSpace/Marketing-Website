import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API } from "aws-amplify";
import { createUsers, createProducts, createOrders, createOrderItems, createCampaigns, createSubscriptions, createAnalytics, createCoupons } from './graphql/mutations';

import {
    Button,
    Flex,
    Heading,
    Text,
    TextField,
    View,
    withAuthenticator,
} from "@aws-amplify/ui-react";
import { listUsers } from "./graphql/queries";
// import {
//     createNote as createNoteMutation,
//     deleteNote as deleteNoteMutation,
// } from "./graphql/mutations";

const App = ({ signOut }) => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes();
    }, []);



    async function fetchNotes() {
        const apiData = await API.graphql({ query: listUsers });
        const notesFromAPI = apiData.data.listUsers.items;
        setNotes(notesFromAPI);
    }

    async function createNote(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        const data = {
            name: form.get("name"),
            description: form.get("description"),
        };
        await API.graphql({
            // query: createNoteMutation,
            variables: { input: data },
        });
        fetchNotes();
        event.target.reset();

        // create new users
        await API.graphql({
            query: createUsers,
            variables: {
                input: {
                    first_name: "Lorem ipsum dolor sit amet",
                    last_name: "Lorem ipsum dolor sit amet",
                    email: "test12346789@testemailtestemail.com",
                    password: "Lorem ipsum dolor sit amet",
                    contact_numer: "(555) 123-6789",
                    address: "Lorem ipsum dolor sit amet",
                    Orders: [],
                    Subscriptions: [],
                    Analytics: [],
                },
            },
        });

        // create new product
        await API.graphql({
            query: createProducts,
            variables: {
                input: {
                "product_name": "Lorem ipsum dolor sit amet",
                "description": "Lorem ipsum dolor sit amet",
                "price": 123.45,
                "SKU": 123.45,
                "image": "https://example.com/image.jpg",
                "OrderItems": []
            }
            }
        });

        // create new order
        await API.graphql({
            query: createOrders,
            variables: {
                input: {
                "usersID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
                "OrderItems": [],
                "date": "1970-01-01Z",
                "status": "Lorem ipsum dolor sit amet",
                "amount": 123.45
            }
            }
        });

        // create order item
        await API.graphql({
            query: createOrderItems,
            variables: {
                input: {
                "ordersID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
                "productsID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
                "quantity": 1020,
                "price": 123.45
            }
            }
        });

        // create new campaigns
        await API.graphql({
            query: createCampaigns,
            variables: {
                input: {
                "campaign_name": "Lorem ipsum dolor sit amet",
                "start_date": "1970-01-01T12:30:23.999Z",
                "end_date": "1970-01-01T12:30:23.999Z",
                "target_audiance": "Lorem ipsum dolor sit amet",
                "campaign_details": "Lorem ipsum dolor sit amet"
            }
            }
        });

        // create new subscriptions
        await API.graphql({
            query: createSubscriptions,
            variables: {
                input: {
                "usersID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
                "subscription_type": "Lorem ipsum dolor sit amet",
                "start_date": "1970-01-01T12:30:23.999Z",
                "renewal_date": "1970-01-01T12:30:23.999Z",
                "subscription_status": true
            }
            }
        });

        // create new analytics
        await API.graphql({
            query: createAnalytics,
            variables: {
                input: {
                "usersID": "a3f4095e-39de-43d2-baf4-f8c16f0f6f4d",
                "page_views": 1020,
                "unique_visitors": 1020,
                "referral_source": "Lorem ipsum dolor sit amet",
                "conversion_rate": 123.45
            }
            }
        });

        // create new coupon
        await API.graphql({
            query: createCoupons,
            variables: {
                input: {
                "coupon_code": "Lorem ipsum dolor sit amet",
                "discount_value": 123.45,
                "validity_date": "1970-01-01Z"
            }
            }
        });

    }

        
    async function deleteNote({ id }) {
        const newNotes = notes.filter((note) => note.id !== id);
        setNotes(newNotes);
        await API.graphql({
            // query: deleteNoteMutation,
            variables: { input: { id } },
        });
    }

    return (
        <View className="App">
            <Heading level={1}>My Notes App</Heading>
            <View as="form" margin="3rem 0" onSubmit={createNote}>
                <Flex direction="row" justifyContent="center">
                    <TextField
                        name="name"
                        placeholder="Note Name"
                        label="Note Name"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <TextField
                        name="description"
                        placeholder="Note Description"
                        label="Note Description"
                        labelHidden
                        variation="quiet"
                        required
                    />
                    <Button type="submit" variation="primary">
                        Create Note
                    </Button>
                </Flex>
            </View>
            <Heading level={2}>Current Notes</Heading>
            <View margin="3rem 0">
                {notes.map((note) => (
                    <Flex
                        key={note.id || note.name}
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Text as="strong" fontWeight={700}>
                            {note.name}
                        </Text>
                        <Text as="span">{note.description}</Text>
                        <Button variation="link" onClick={() => deleteNote(note)}>
                            Delete note
                        </Button>
                    </Flex>
                ))}
            </View>
            <Button onClick={signOut}>Sign Out</Button>
        </View>
    );
};

export default withAuthenticator(App);