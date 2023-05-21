import React from 'react';
import ReactDOM from 'react-dom/client';

// JSX => React.createElement => Object => HTML(DOM)
// Element
const title = (
	<a href='/'>
		<img className='logo' alt='logo' src='https://lh3.googleusercontent.com/p/AF1QipO_6cTc3QdC9L2vAOyCkUPG-G-9YeFxo3YiDu3R=w1080-h608-p-no-v0' />
	</a>
);

// Functional Component => Its just a function
const Header = () => {
	return (
		<div className='header'>
			{title}
			<div className='nav-items'>
				<ul>
					<li>Home</li>
					<li>Abount</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	);
}

const restaurantList = [
	{
    "type": "restaurant",
    "data": {
        "type": "F",
        "id": "617676",
        "name": "Third Wave Coffee",
        "uuid": "2d7e05e8-00ba-4836-a19a-9780ef234f85",
        "city": "5",
        "area": "Mulund",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "0dca660dbdf2e04f9b861c4426ffd41e",
        "cuisines": [
            "Cafe",
            "Desserts",
            "Beverages"
        ],
        "tags": [],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "slaString": "24 MINS",
        "lastMileTravel": 1.2000000476837158,
        "slugs": {
            "restaurant": "third-wave-coffee-mulund-mulund",
            "city": "mumbai"
        },
        "cityState": "5",
        "address": "SHOP NO 40 AND 41, GR FLOOR, R-GALLERIA,RUNWAL GREENS, MULUND GOREGAON LINKROAD, BHANDUP WEST, MUMBAI 400078,Greater Mumbai Ward-S, Greater Mumbai,Maharashtra-400078",
        "locality": "Mulund Goregaon Linkroad",
        "parentId": 274773,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [],
        "ribbon": [
            {
                "type": "PROMOTED"
            }
        ],
        "chain": [],
        "feeDetails": {
            "fees": [
                {
                    "name": "distance",
                    "fee": 3700,
                    "message": ""
                },
                {
                    "name": "time",
                    "fee": 0,
                    "message": ""
                },
                {
                    "name": "special",
                    "fee": 0,
                    "message": ""
                }
            ],
            "totalFees": 3700,
            "message": "",
            "title": "Delivery Charge",
            "amount": "3700",
            "icon": ""
        },
        "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6790119~p=1~eid=00000188-3d6f-4c05-6574-b3e100a90124",
        "badges": {
            "imageBased": [],
            "textBased": [],
            "textExtendedBadges": []
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75",
            "discountTag": "",
            "headerTypeV2": 0
        },
        "sla": {
            "restaurantId": "617676",
            "deliveryTime": 24,
            "minDeliveryTime": 24,
            "maxDeliveryTime": 24,
            "lastMileTravel": 1.2000000476837158,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.5",
        "totalRatings": 100,
        "new": false
    },
    "subtype": "basic"
	},
	{
			"type": "restaurant",
			"data": {
					"type": "F",
					"id": "106791",
					"name": "Cafe Maaz",
					"uuid": "889a77e8-f0ef-4479-acbc-59d14e56067a",
					"city": "5",
					"area": "Bhandup West",
					"totalRatingsString": "10000+ ratings",
					"cloudinaryImageId": "klvis3lnmhn9lnnee6j2",
					"cuisines": [
							"North Indian",
							"Chinese"
					],
					"tags": [],
					"costForTwo": 35000,
					"costForTwoString": "₹350 FOR TWO",
					"deliveryTime": 22,
					"minDeliveryTime": 22,
					"maxDeliveryTime": 22,
					"slaString": "22 MINS",
					"lastMileTravel": 0.30000001192092896,
					"slugs": {
							"restaurant": "cafe-maaz-bhandup-bhandup",
							"city": "mumbai"
					},
					"cityState": "5",
					"address": "Near Bhandup, Sonapur Bus Stop, LBS Marg, Bhandup West, Bhandup, Mumbai",
					"locality": "LBS Marg",
					"parentId": 53573,
					"unserviceable": false,
					"veg": false,
					"select": false,
					"favorite": false,
					"tradeCampaignHeaders": [],
					"chain": [],
					"feeDetails": {
							"fees": [
									{
											"name": "distance",
											"fee": 3700,
											"message": ""
									},
									{
											"name": "time",
											"fee": 0,
											"message": ""
									},
									{
											"name": "special",
											"fee": 0,
											"message": ""
									}
							],
							"totalFees": 3700,
							"message": "",
							"title": "Delivery Charge",
							"amount": "3700",
							"icon": ""
					},
					"availability": {
							"opened": true,
							"nextOpenMessage": "",
							"nextCloseMessage": ""
					},
					"longDistanceEnabled": 0,
					"rainMode": "NONE",
					"thirdPartyAddress": false,
					"thirdPartyVendor": "",
					"adTrackingID": "",
					"badges": {
							"imageBased": [],
							"textBased": [],
							"textExtendedBadges": []
					},
					"lastMileTravelString": "0.3 kms",
					"hasSurge": false,
					"aggregatedDiscountInfoV3": {
							"header": "10% OFF",
							"subHeader": "UPTO ₹40",
							"discountTag": "",
							"headerTypeV2": 0
					},
					"sla": {
							"restaurantId": "106791",
							"deliveryTime": 22,
							"minDeliveryTime": 22,
							"maxDeliveryTime": 22,
							"lastMileTravel": 0.30000001192092896,
							"lastMileDistance": 0,
							"serviceability": "SERVICEABLE",
							"rainMode": "NONE",
							"longDistance": "NOT_LONG_DISTANCE",
							"preferentialService": false,
							"iconType": "EMPTY"
					},
					"promoted": false,
					"avgRating": "4.1",
					"totalRatings": 10000,
					"new": false
			},
			"subtype": "basic"
	},
	{
			"type": "restaurant",
			"data": {
					"type": "F",
					"id": "634289",
					"name": "Dabba Garam (Homestyle Meals & More)",
					"uuid": "03b8ea00-d11f-4479-9bee-f5b1662d9796",
					"city": "5",
					"area": "Mulund",
					"totalRatingsString": "1000+ ratings",
					"cloudinaryImageId": "sjjn3eiara6fjo2uxxhk",
					"cuisines": [
							"Home Food",
							"North Indian",
							"Thai"
					],
					"tags": [],
					"costForTwo": 15000,
					"costForTwoString": "₹150 FOR TWO",
					"deliveryTime": 23,
					"minDeliveryTime": 23,
					"maxDeliveryTime": 23,
					"slaString": "23 MINS",
					"lastMileTravel": 1.100000023841858,
					"slugs": {
							"restaurant": "dabba-garam-(homestyle-meals-&-more)-mulund-mulund",
							"city": "mumbai"
					},
					"cityState": "5",
					"address": "Shop no. TM 14-1/1, ground floor, opp. Vasant Stores, Nahur Village, Bhandup-West, Mumbai-400078",
					"locality": "Uthalsar Zone",
					"parentId": 67608,
					"unserviceable": false,
					"veg": true,
					"select": false,
					"favorite": false,
					"tradeCampaignHeaders": [],
					"chain": [],
					"feeDetails": {
							"fees": [
									{
											"name": "distance",
											"fee": 3700,
											"message": ""
									},
									{
											"name": "time",
											"fee": 0,
											"message": ""
									},
									{
											"name": "special",
											"fee": 0,
											"message": ""
									}
							],
							"totalFees": 3700,
							"message": "",
							"title": "Delivery Charge",
							"amount": "3700",
							"icon": ""
					},
					"availability": {
							"opened": true,
							"nextOpenMessage": "",
							"nextCloseMessage": ""
					},
					"longDistanceEnabled": 0,
					"rainMode": "NONE",
					"thirdPartyAddress": false,
					"thirdPartyVendor": "",
					"adTrackingID": "",
					"badges": {
							"imageBased": [],
							"textBased": [],
							"textExtendedBadges": []
					},
					"lastMileTravelString": "1.1 kms",
					"hasSurge": false,
					"aggregatedDiscountInfoV3": {
							"header": "40% OFF",
							"subHeader": "UPTO ₹100",
							"discountTag": "",
							"headerTypeV2": 0
					},
					"sla": {
							"restaurantId": "634289",
							"deliveryTime": 23,
							"minDeliveryTime": 23,
							"maxDeliveryTime": 23,
							"lastMileTravel": 1.100000023841858,
							"lastMileDistance": 0,
							"serviceability": "SERVICEABLE",
							"rainMode": "NONE",
							"longDistance": "NOT_LONG_DISTANCE",
							"preferentialService": false,
							"iconType": "EMPTY"
					},
					"promoted": false,
					"avgRating": "4.3",
					"totalRatings": 1000,
					"new": false
			},
			"subtype": "basic"
	},
	{
			"type": "restaurant",
			"data": {
					"type": "F",
					"id": "331807",
					"name": "Maiz Mexican Kitchen",
					"uuid": "86468ac0-740a-42bf-a5c3-368bc9978139",
					"city": "5",
					"area": "Powai Road",
					"totalRatingsString": "1000+ ratings",
					"cloudinaryImageId": "pusc12qpclchjpheb21z",
					"cuisines": [
							"Mexican"
					],
					"tags": [],
					"costForTwo": 60000,
					"costForTwoString": "₹600 FOR TWO",
					"deliveryTime": 48,
					"minDeliveryTime": 48,
					"maxDeliveryTime": 48,
					"slaString": "48 MINS",
					"lastMileTravel": 6.900000095367432,
					"slugs": {
							"restaurant": "maiz-mexican-kitchen-powai-area-powai-area",
							"city": "mumbai"
					},
					"cityState": "5",
					"address": "Maiz Mexican Kitchen, Shop No.21, Powai Plaza, Powai",
					"locality": "Powai Area",
					"parentId": 11654,
					"unserviceable": false,
					"veg": false,
					"select": false,
					"favorite": false,
					"tradeCampaignHeaders": [],
					"ribbon": [
							{
									"type": "PROMOTED"
							}
					],
					"chain": [],
					"feeDetails": {
							"fees": [
									{
											"name": "distance",
											"fee": 5700,
											"message": ""
									},
									{
											"name": "time",
											"fee": 0,
											"message": ""
									},
									{
											"name": "special",
											"fee": 0,
											"message": ""
									}
							],
							"totalFees": 5700,
							"message": "",
							"title": "Delivery Charge",
							"amount": "5700",
							"icon": ""
					},
					"availability": {
							"opened": true,
							"nextOpenMessage": "",
							"nextCloseMessage": ""
					},
					"longDistanceEnabled": 0,
					"rainMode": "NONE",
					"thirdPartyAddress": false,
					"thirdPartyVendor": "",
					"adTrackingID": "cid=6802622~p=4~eid=00000188-3d6f-4c05-6574-b3e200a9043b",
					"badges": {
							"imageBased": [],
							"textBased": [],
							"textExtendedBadges": []
					},
					"lastMileTravelString": "6.9 kms",
					"hasSurge": false,
					"aggregatedDiscountInfoV3": {
							"header": "60% OFF",
							"subHeader": "UPTO ₹120",
							"discountTag": "",
							"headerTypeV2": 0
					},
					"sla": {
							"restaurantId": "331807",
							"deliveryTime": 48,
							"minDeliveryTime": 48,
							"maxDeliveryTime": 48,
							"lastMileTravel": 6.900000095367432,
							"lastMileDistance": 0,
							"serviceability": "SERVICEABLE",
							"rainMode": "NONE",
							"longDistance": "NOT_LONG_DISTANCE",
							"preferentialService": false,
							"iconType": "EMPTY"
					},
					"promoted": true,
					"avgRating": "4.3",
					"totalRatings": 1000,
					"new": false
			},
			"subtype": "basic"
	},
	{
			"type": "restaurant",
			"data": {
					"type": "P",
					"id": "110865",
					"name": "Foodway Restaurant",
					"uuid": "f3897984-b7ce-47b3-83be-498519a01a56",
					"city": "5",
					"area": "Bhandup",
					"totalRatingsString": "10000+ ratings",
					"cloudinaryImageId": "qo8p8xj30ktcftf9maoa",
					"cuisines": [
							"Mughlai",
							"Chinese",
							"North Indian",
							"Tandoor"
					],
					"tags": [],
					"costForTwo": 20000,
					"costForTwoString": "₹200 FOR TWO",
					"deliveryTime": 17,
					"minDeliveryTime": 17,
					"maxDeliveryTime": 17,
					"slaString": "17 MINS",
					"lastMileTravel": 0,
					"slugs": {
							"restaurant": "foodway-restaurant-bhandup-west-mumbai-maharashtra-india-bhandup",
							"city": "mumbai"
					},
					"cityState": "5",
					"address": "SHOP NO 3 R R  SINGH CHAWL OPP TEKKND WORKS LBS ROAD SONAPUR BHANDUP WEST GREATER MUMBAI WARD GREATER MUMBAI",
					"locality": "SONAPUR BHANDUP WEST",
					"parentId": 82958,
					"unserviceable": false,
					"veg": false,
					"select": false,
					"favorite": false,
					"tradeCampaignHeaders": [],
					"chain": [],
					"feeDetails": {
							"fees": [
									{
											"name": "distance",
											"fee": 3700,
											"message": ""
									},
									{
											"name": "time",
											"fee": 0,
											"message": ""
									},
									{
											"name": "special",
											"fee": 0,
											"message": ""
									}
							],
							"totalFees": 3700,
							"message": "",
							"title": "Delivery Charge",
							"amount": "3700",
							"icon": ""
					},
					"availability": {
							"opened": true,
							"nextOpenMessage": "",
							"nextCloseMessage": ""
					},
					"longDistanceEnabled": 0,
					"rainMode": "NONE",
					"thirdPartyAddress": false,
					"thirdPartyVendor": "",
					"adTrackingID": "",
					"badges": {
							"imageBased": [],
							"textBased": [],
							"textExtendedBadges": []
					},
					"hasSurge": false,
					"aggregatedDiscountInfoV3": {
							"header": "50% OFF",
							"subHeader": "UPTO ₹100",
							"discountTag": "",
							"headerTypeV2": 0
					},
					"sla": {
							"restaurantId": "110865",
							"deliveryTime": 17,
							"minDeliveryTime": 17,
							"maxDeliveryTime": 17,
							"lastMileTravel": 0,
							"lastMileDistance": 0,
							"serviceability": "SERVICEABLE",
							"rainMode": "NONE",
							"longDistance": "NOT_LONG_DISTANCE",
							"preferentialService": false,
							"iconType": "EMPTY"
					},
					"promoted": false,
					"avgRating": "4.1",
					"totalRatings": 10000,
					"new": false
			},
			"subtype": "basic"
	},
	{
			"type": "restaurant",
			"data": {
					"type": "F",
					"id": "11238",
					"name": "Thambbi",
					"uuid": "3d4e7d51-7050-4f4c-8121-b45663813a20",
					"city": "5",
					"area": "Mulund West",
					"totalRatingsString": "10000+ ratings",
					"cloudinaryImageId": "podxw82lslaxnvtkv9c6",
					"cuisines": [
							"South Indian",
							"Punjabi",
							"Snacks",
							"Thalis"
					],
					"tags": [],
					"costForTwo": 40000,
					"costForTwoString": "₹400 FOR TWO",
					"deliveryTime": 18,
					"minDeliveryTime": 18,
					"maxDeliveryTime": 18,
					"slaString": "18 MINS",
					"lastMileTravel": 0.20000000298023224,
					"slugs": {
							"restaurant": "thambbi-matunga-wadala-2",
							"city": "mumbai"
					},
					"cityState": "5",
					"address": "14/15, Runwal Heights Premises, LBS Marg, Mulund West, Mumbai",
					"locality": "Opposite Nirmal Lifestyle Mall",
					"parentId": 2527,
					"unserviceable": false,
					"veg": true,
					"select": false,
					"favorite": false,
					"tradeCampaignHeaders": [],
					"chain": [],
					"feeDetails": {
							"fees": [
									{
											"name": "distance",
											"fee": 3700,
											"message": ""
									},
									{
											"name": "time",
											"fee": 0,
											"message": ""
									},
									{
											"name": "special",
											"fee": 0,
											"message": ""
									}
							],
							"totalFees": 3700,
							"message": "",
							"title": "Delivery Charge",
							"amount": "3700",
							"icon": ""
					},
					"availability": {
							"opened": true,
							"nextOpenMessage": "",
							"nextCloseMessage": ""
					},
					"longDistanceEnabled": 0,
					"rainMode": "NONE",
					"thirdPartyAddress": false,
					"thirdPartyVendor": "",
					"adTrackingID": "",
					"badges": {
							"imageBased": [],
							"textBased": [],
							"textExtendedBadges": []
					},
					"lastMileTravelString": "0.2 kms",
					"hasSurge": false,
					"aggregatedDiscountInfoV3": {
							"header": "20% OFF",
							"subHeader": "UPTO ₹50",
							"discountTag": "",
							"headerTypeV2": 0
					},
					"sla": {
							"restaurantId": "11238",
							"deliveryTime": 18,
							"minDeliveryTime": 18,
							"maxDeliveryTime": 18,
							"lastMileTravel": 0.20000000298023224,
							"lastMileDistance": 0,
							"serviceability": "SERVICEABLE",
							"rainMode": "NONE",
							"longDistance": "NOT_LONG_DISTANCE",
							"preferentialService": false,
							"iconType": "EMPTY"
					},
					"promoted": false,
					"avgRating": "4.3",
					"totalRatings": 10000,
					"new": false
			},
			"subtype": "basic"
	},
	{
		"type": "restaurant",
		"data": {
		"type": "F",
		"id": "640422",
		"name": "Deliure & The Eatrium",
		"uuid": "ec204cfe-bf92-4c61-b615-54449480c423",
		"city": "5",
		"area": "Thane Panchpakhadi",
		"totalRatingsString": "500+ ratings",
		"cloudinaryImageId": "10ee2905f7f3ff8645bacb3797808a2a",
		"cuisines": [
		"Desserts",
		"Bakery",
		"Snacks",
		"Chaat"
		],
		"tags": [],
		"costForTwo": 30000,
		"costForTwoString": "₹300 FOR TWO",
		"deliveryTime": 38,
		"minDeliveryTime": 38,
		"maxDeliveryTime": 38,
		"slaString": "38 MINS",
		"lastMileTravel": 5.599999904632568,
		"slugs": {
		"restaurant": "deliure-thane-panchpakhadi-thane-panchpakhadi",
		"city": "mumbai"
		},
		"cityState": "5",
		"address": "SHOP NO , GROUND FLOOR GAGANGIRI CHS LTD, PANCHPAKHADI, THANE WEST, THANE - 400601",
		"locality": "Gagangiri chs ltd",
		"parentId": 70641,
		"unserviceable": false,
		"veg": false,
		"select": false,
		"favorite": false,
		"tradeCampaignHeaders": [],
		"ribbon": [
		{
		"type": "PROMOTED"
		}
		],
		"chain": [],
		"feeDetails": {
		"fees": [
		{
		"name": "distance",
		"fee": 5300,
		"message": ""
		},
		{
		"name": "time",
		"fee": 0,
		"message": ""
		},
		{
		"name": "special",
		"fee": 0,
		"message": ""
		}
		],
		"totalFees": 5300,
		"message": "",
		"title": "Delivery Charge",
		"amount": "5300",
		"icon": ""
		},
		"availability": {
		"opened": true,
		"nextOpenMessage": "",
		"nextCloseMessage": ""
		},
		"longDistanceEnabled": 0,
		"rainMode": "NONE",
		"thirdPartyAddress": false,
		"thirdPartyVendor": "",
		"adTrackingID": "cid=6789496~p=19~eid=00000188-3d6f-4c05-6574-b3e700a91314",
		"badges": {
		"imageBased": [],
		"textBased": [],
		"textExtendedBadges": []
		},
		"lastMileTravelString": "5.5 kms",
		"hasSurge": false,
		"aggregatedDiscountInfoV3": {
		"header": "50% OFF",
		"subHeader": "UPTO ₹100",
		"discountTag": "",
		"headerTypeV2": 0
		},
		"sla": {
		"restaurantId": "640422",
		"deliveryTime": 38,
		"minDeliveryTime": 38,
		"maxDeliveryTime": 38,
		"lastMileTravel": 5.599999904632568,
		"lastMileDistance": 0,
		"serviceability": "SERVICEABLE",
		"rainMode": "NONE",
		"longDistance": "NOT_LONG_DISTANCE",
		"preferentialService": false,
		"iconType": "EMPTY"
		},
		"promoted": true,
		"avgRating": "4.6",
		"totalRatings": 500,
		"new": false
		},
		"subtype": "basic"
	},
	{
	"type": "restaurant",
	"data": {
	"type": "F",
	"id": "31803",
	"name": "McDonald's",
	"uuid": "37ce81a3-7cf0-48d2-a7a8-2b25ad8cd2ce",
	"city": "5",
	"area": "Bhandup West",
	"totalRatingsString": "10000+ ratings",
	"cloudinaryImageId": "ee5f8e06b300efc07c9fe3f4df40dfc4",
	"cuisines": [
	"Burgers",
	"Beverages",
	"Cafe",
	"Desserts"
	],
	"tags": [],
	"costForTwo": 40000,
	"costForTwoString": "₹400 FOR TWO",
	"deliveryTime": 33,
	"minDeliveryTime": 33,
	"maxDeliveryTime": 33,
	"slaString": "33 MINS",
	"lastMileTravel": 2.5,
	"slugs": {
	"restaurant": "mcdonalds-magnet-mall-bhandup",
	"city": "mumbai"
	},
	"cityState": "5",
	"address": "Hardcastle Restaurants Pvt Ltd, McDonalds Family Restaurants Pvt Ltd, Eastern Business Park- Bhandup, Neptune Magnet Mall, LBS Marg, Bhandup West, Mumbai ? 400078.",
	"locality": "Magnet Mall",
	"parentId": 630,
	"unserviceable": false,
	"veg": false,
	"select": false,
	"favorite": false,
	"tradeCampaignHeaders": [],
	"chain": [],
	"feeDetails": {
	"fees": [
	{
	"name": "distance",
	"fee": 3700,
	"message": ""
	},
	{
	"name": "time",
	"fee": 0,
	"message": ""
	},
	{
	"name": "special",
	"fee": 0,
	"message": ""
	}
	],
	"totalFees": 3700,
	"message": "",
	"title": "Delivery Charge",
	"amount": "3700",
	"icon": ""
	},
	"availability": {
	"opened": true,
	"nextOpenMessage": "",
	"nextCloseMessage": ""
	},
	"longDistanceEnabled": 0,
	"rainMode": "NONE",
	"thirdPartyAddress": false,
	"thirdPartyVendor": "",
	"adTrackingID": "",
	"badges": {
	"imageBased": [],
	"textBased": [],
	"textExtendedBadges": []
	},
	"lastMileTravelString": "2.5 kms",
	"hasSurge": false,
	"aggregatedDiscountInfoV3": {
	"header": "40% OFF",
	"subHeader": "UPTO ₹80",
	"discountTag": "",
	"headerTypeV2": 0
	},
	"sla": {
	"restaurantId": "31803",
	"deliveryTime": 33,
	"minDeliveryTime": 33,
	"maxDeliveryTime": 33,
	"lastMileTravel": 2.5,
	"lastMileDistance": 0,
	"serviceability": "SERVICEABLE",
	"rainMode": "NONE",
	"longDistance": "NOT_LONG_DISTANCE",
	"preferentialService": false,
	"iconType": "EMPTY"
	},
	"promoted": false,
	"avgRating": "4.3",
	"totalRatings": 10000,
	"new": false
	},
	"subtype": "basic"
	},
];

const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
	return (
		<div className='card'>
			<img alt='restaurant-logo' src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' + cloudinaryImageId} />
			<h2>{name}</h2>
			<h3>{cuisines.join(', ')}</h3>
			<h4>{avgRating} Stars</h4>
		</div>
	);
}

const Body = () => {
	return (
		<div className='restaurant-list'>
			{
				restaurantList.map(restaurant => {
					return <RestaurantCard {...restaurant.data}/>;
				})
			}
		</div>
	);
}

const Footer = () => {
	return (
		<div>Footer</div>
	);
}

const AppLayout = () => {
	return (
		<>
			<Header/>
			<Body/>
			<Footer/>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 