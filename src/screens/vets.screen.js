import { useContext } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { VetsContext } from "../services/vets.context";
import { VetInfoCardComponent } from "../components/vets-info-card.component";
import { LoadingContainer, Loading } from "../theme/styles";
import { FadeInAnimation } from "../animations/fade-in.animation";
import { FavouritesBarComponent } from "../components/favourites-bar.component";
import { FavouritesContext } from "../data/favourites.context";

export const VetsScreen = ({ navigation }) => {
  const vetsContext = useContext(VetsContext);
  const favouritesContext = useContext(FavouritesContext);

  return (
    <>
      {vetsContext.isLoading && (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
      <FavouritesBarComponent
        favourites={favouritesContext.favourites}
        onNavigate={navigation.navigate}
      />
      <FlatList
        data={vetsContext.vets}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("VetDetailScreen", {
                  vet: item,
                })
              }
            >
              <FadeInAnimation>
                <VetInfoCardComponent vet={item} />
              </FadeInAnimation>
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </>
  );
};
