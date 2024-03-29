import React, {useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './styles';

interface Product {
  id: number;
  name: string;
}

interface Variant {
  id: number;
  name: string;
}

interface Model extends Product {
  variants: Variant[];
}

interface Brand extends Product {
  models: Model[];
}

interface Category extends Product {
  brands: Brand[];
}

interface ProductTreeProps {
  data: {
    categories: Category[];
  };
}

const ProductTree: React.FC<ProductTreeProps> = ({data}) => {
  const [expandedNodes, setExpandedNodes] = useState<number[]>([]);

  const toggleNode = (nodeId: number) => {
    setExpandedNodes(prevNodes =>
      prevNodes.includes(nodeId)
        ? prevNodes.filter(id => id !== nodeId)
        : [...prevNodes, nodeId],
    );
  };

  const renderCategory = (category: Category) => (
    <View key={category.id} style={styles.categoryView}>
      <TouchableOpacity
        onPress={() => toggleNode(category.id)}
        style={styles.titleView}>
        <Text style={styles.node}>{category.name}</Text>
      </TouchableOpacity>
      {expandedNodes.includes(category.id) && category.brands.map(renderBrand)}
    </View>
  );
  const renderBrand = (brand: Brand) => (
    <View key={brand.id} style={styles.sectionView}>
      <TouchableOpacity
        onPress={() => toggleNode(brand.id)}
        style={styles.titleView}>
        <Text>{brand.name}</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {expandedNodes.includes(brand.id) && brand.models.map(renderModel)}
      </View>
    </View>
  );

  const renderModel = (model: Model) => (
    <View key={model.id} style={styles.sectionView}>
      <TouchableOpacity
        onPress={() => toggleNode(model.id)}
        style={styles.titleView}>
        <Text>{model.name}</Text>
      </TouchableOpacity>
      <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
        {expandedNodes.includes(model.id) && model.variants?.map(renderVariant)}
      </View>
    </View>
  );

  const renderVariant = (variant: Variant) =>
    variant ? (
      <TouchableOpacity
        key={variant.id}
        style={[styles.titleView, {margin: 7}]}>
        <Text style={styles.titleStyle}>{variant.name}</Text>
      </TouchableOpacity>
    ) : null;

  return (
    <ScrollView style={styles.container}>
      {data.categories.map(renderCategory)}
    </ScrollView>
  );
};

export default ProductTree;
