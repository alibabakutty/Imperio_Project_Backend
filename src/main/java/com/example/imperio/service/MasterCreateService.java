package com.example.imperio.service;

import com.example.imperio.dto.*;

import java.util.List;

public interface MasterCreateService {


    RegionMasterCreateDto createRegionMaster(RegionMasterCreateDto regionMasterCreateDto);



    ExecutiveMasterCreateDto createExecutiveMaster(ExecutiveMasterCreateDto executiveMasterCreateDto);


    DistributorMasterCreateDto createDistributorMaster(DistributorMasterCreateDto distributorMasterCreateDto);


    ProductMasterCreateDto createProductMaster(ProductMasterCreateDto productMasterCreateDto);


    RegionMasterCreateDto getRegionMaster(String regionMasterId);

    List<RegionMasterCreateDto> getAllRegionMasterIds();


    ExecutiveMasterCreateDto getExecutiveMaster(String executiveCode);

    List<ExecutiveMasterCreateDto> getAllExecutiveMasterCodes();


    DistributorMasterCreateDto getDistributorMaster(String distributorCode);

    List<DistributorMasterCreateDto> getAllDistributorMaterCodes();


    ProductMasterCreateDto getProductMaster(String productCode);

    List<ProductMasterCreateDto> getAllProductMasterCodes();


    RegionMasterCreateDto updateRegion(String regionMasterId, RegionMasterCreateDto updatedRegion);

    ExecutiveMasterCreateDto updateExecutive(String executiveCode, ExecutiveMasterCreateDto updatedExecutive);

    DistributorMasterCreateDto updateDistributor(String distributorCode, DistributorMasterCreateDto updatedDistributor);

    ProductMasterCreateDto updateProduct(String productCode, ProductMasterCreateDto updatedProduct);

    void deleteRegion(String regionMasterId);

    void deleteExecutive(String executiveCode);

    void deleteDistributor(String distributorCode);

    void deleteProduct(String productCode);


    GodownMasterCreateDto createGodownMaster(GodownMasterCreateDto godownMasterCreateDto);



    GodownMasterCreateDto getGodownMaster(String godownCode);

    List<GodownMasterCreateDto> getAllGodownMasterCodes();

    GodownMasterCreateDto updateGodown(String godownCode, GodownMasterCreateDto updatedGodown);

    void deleteGodown(String godownCode);

    UnitMasterCreateDto createUnitMaster(UnitMasterCreateDto unitMasterCreateDto);

    UnitMasterCreateDto getUnitMaster(String uom);

    List<UnitMasterCreateDto> getAllUnits();

    void deleteUnit(String uom);

    VoucherTypeCreateDto createVoucherType(VoucherTypeCreateDto voucherTypeCreateDto);

    VoucherTypeCreateDto getVoucherType(String voucherType);

    List<VoucherTypeCreateDto> getAllVoucherTypes();

    void deleteVoucherType(String voucherType);

    VoucherTypeMasterCreateDto createVoucherTypeMaster(VoucherTypeMasterCreateDto voucherTypeMasterCreateDto);

    VoucherTypeMasterCreateDto getVoucherTypeName(String voucherTypeName);

    List<VoucherTypeMasterCreateDto> getAllVoucherTypeNames();

    VoucherTypeMasterCreateDto updateVoucherTypeMaster(String voucherTypeName, VoucherTypeMasterCreateDto updatedVoucherTypeMaster);

    void deleteVoucherTypeMaster(String voucherTypeName);

}
