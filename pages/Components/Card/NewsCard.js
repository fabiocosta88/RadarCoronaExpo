import React from "react";
import { Linking } from 'expo';
import { View, Text, Image, TouchableOpacity} from "react-native";

//Components
import Card from "./Card";

//Styles
import styles from "./NewsCardStyles";

export default function NewsCard({ title, image, description, author, url, publishedAt }) {

    return (
        <>
            <Card style={styles.card}>
                <TouchableOpacity
                activeOpacity={1.0}
                onPress={() => Linking.openURL(url)}
                >
                    <Image
                        style={styles.image}
                        source={{
                            uri: image,
                        }}
                    />
                    <View style={styles.titlecontainer}>
                        <Text numberOfLines={3} style={styles.title}>{title}</Text>
                    </View>
                    <View>
                    <Text numberOfLines={5} style={styles.text}>{description}</Text>
                    </View>
                    <View style={styles.containerfooter}>
                        <Text style={styles.date}>Publicado em: {publishedAt}</Text>
                    </View>
                </TouchableOpacity>
            </Card>
        </>
    );
}
